import { Delete, Edit } from "@mui/icons-material";


export default function Table({ params }) {
  return (
    <div style={{ margin: "20px" }}>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {params.products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
                <button onClick={() => editproduct()}>
                  <Edit></Edit>
                </button>
                <button onClick={() => deleteData(item.id)}>
                  <Delete></Delete>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
