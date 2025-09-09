```mermaid
classDiagram
class Trip {id; title; start; end}
class Activity {id; tripId; day; title}
class Expense {id; tripId; amount; category}
Trip "1"--o"many" Activity
Trip "1"--o"many" Expense
```