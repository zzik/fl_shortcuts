import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Container, Table, Spinner } from "react-bootstrap";

const CategoryList = () => {
  const [shortcuts, setShortcuts] = useState();

  useEffect(() => {
    fetchData().then(setShortcuts);
  }, []);

  //   if (!shortcuts) {
  //     return (
  //       <Container className="mt-4 text-center">
  //         <Spinner animation="border" />
  //       </Container>
  //     );
  //   }

  //   let data = Object.entries(shortcuts);

  let data

  if (shortcuts) {
    // console.log(Object.entries(shortcuts))
    data = Object.entries(shortcuts)
    data = data.map((element, i) => {
        let title = element[0]
        let content = element[1]

        content = content.map((payload, idx) => {
            return <tr key={idx}>
                <td>{payload.keys}</td>
                <td>{payload.action}</td>
                <td>{title}</td>
            </tr>
        })

        return content

    })
  }
  //   shortcuts.map((entry, idx) => (
  //     <tr key={idx}>
  //       <td>{entry.shortcut}</td>
  //       <td>{entry.action}</td>
  //     </tr>
  //   ));

  return (
    <Container className="mt-4">
      <h3>FL Studio Shortcuts</h3>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Shortcut</th>
            <th>Action</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>{data}</tbody>
      </Table>
    </Container>
  );
};

export default CategoryList;
