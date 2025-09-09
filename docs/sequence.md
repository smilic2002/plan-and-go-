```mermaid
sequenceDiagram
participant U as Korisnik
participant FE as Frontend
participant BE as Backend
U->>FE: Novi trip
FE->>BE: POST /trips
BE-->>FE: 201 Created
FE-->>U: Vidi listu
```