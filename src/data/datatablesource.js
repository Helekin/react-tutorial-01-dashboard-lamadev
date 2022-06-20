export const userColumns = [
  { field: "id", headerName: "ID", width: "70" },
  {
    field: "user",
    headerName: "User",
    width: "230",
    renderCell: (params) => {
      return (
        <div className="cell-with-image">
          <img className="cell-img" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: "230" },
  { field: "age", headerName: "Age", width: "230" },
  {
    field: "status",
    headerName: "Status",
    width: "160",
    renderCell: (params) => {
      return (
        <div className={`cell-with-status ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow Jon",
    img: "https://cdn0.iconfinder.com/data/icons/people-lifestyle/100/Man-02-512.png",
    email: "snowjon@gmail.com",
    status: "active",
    age: 35,
  },
  {
    id: 2,
    username: "Lannister Cersei",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Female_icon.svg/920px-Female_icon.svg.png",
    email: "lannistercersei@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister Jaime",
    img: "https://cdn0.iconfinder.com/data/icons/people-lifestyle/100/Man-02-512.png",
    email: "lajaime@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark Arya",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Female_icon.svg/920px-Female_icon.svg.png",
    email: "starkaria@gmail.com",
    status: "pending",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen Daenerys",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Female_icon.svg/920px-Female_icon.svg.png",
    email: "tardae@gmail.com",
    status: "passive",
    age: null,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Female_icon.svg/920px-Female_icon.svg.png",
    email: "meli@gmail.com",
    status: "active",
    age: 150,
  },
  {
    id: 7,
    username: "Clifford Ferrara",
    img: "https://cdn0.iconfinder.com/data/icons/people-lifestyle/100/Man-02-512.png",
    email: "clifer@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances Rossini",
    img: "https://cdn0.iconfinder.com/data/icons/people-lifestyle/100/Man-02-512.png",
    email: "fraros@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie Harvey",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Female_icon.svg/920px-Female_icon.svg.png",
    email: "roha@gmail.com",
    status: "active",
    age: 65,
  },
];
