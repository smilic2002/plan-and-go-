import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let trips = [];
let nextTripId = 1;

app.get('/health', (req, res) => res.json({ok:true}));

app.get('/trips', (req, res) => res.json(trips));

app.post('/trips', (req, res) => {
  const { title, start, end } = req.body;
  if(!title || !start || !end){
    return res.status(400).json({error:'Nedostaju polja'});
  }
  const newTrip = {id: nextTripId++, title, start, end, activities: [], expenses: []};
  trips.push(newTrip);
  res.status(201).json(newTrip);
});

app.post('/trips/:id/activities', (req, res) => {
  const trip = trips.find(t => t.id == req.params.id);
  if(!trip) return res.status(404).json({error:'Nema putovanja'});
  const { day, title, time, note } = req.body;
  if(!day || !title) return res.status(400).json({error:'Nedostaju polja'});
  const act = {id: trip.activities.length+1, day, title, time: time||'', note: note||''};
  trip.activities.push(act);
  res.status(201).json(act);
});

app.post('/trips/:id/expenses', (req, res) => {
  const trip = trips.find(t => t.id == req.params.id);
  if(!trip) return res.status(404).json({error:'Nema putovanja'});
  const { amount, category, note } = req.body;
  const num = Number(amount);
  if(isNaN(num)||num<=0) return res.status(400).json({error:'Krivi iznos'});
  const exp = {id: trip.expenses.length+1, amount: num, category: category||'ostalo', note: note||''};
  trip.expenses.push(exp);
  const total = trip.expenses.reduce((s,e)=>s+e.amount,0);
  res.status(201).json({expense:exp,total});
});

const PORT = 3000;
app.listen(PORT, ()=> console.log("Plan&Go backend radi na http://localhost:"+PORT));
