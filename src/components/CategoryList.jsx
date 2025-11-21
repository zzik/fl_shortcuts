import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Container, Table, Spinner, Row, Col } from "react-bootstrap";

const CategoryList = () => {
  const [shortcuts, setShortcuts] = useState();

  useEffect(() => {
    fetchData().then(setShortcuts);
  }, []);

  let data;

  if (shortcuts) {
    data = Object.entries(shortcuts);
    data = data.map((element) => {
      let title = element[0];
      let content = element[1];

      content = content.map((payload, idx) => {

        // switch (title) {
        //   case "global_shortcuts":
        //     title = "bg-primary";
        //     break;
        //   case "file_operations":
        //     title = "bg-secondary";
        //     break;
        //   case "pattern_selector_numpad":
        //     title = "bg-success";
        //     break;
        //   case "channel_rack_step_sequencer":
        //     title = "bg-danger";
        //     break;
        //   case "record_playback_transport":
        //     title = "bg-warning";
        //     break;
        //   case "window_navigation":
        //     title = "bg-info";
        //     break;
        //   case "mixer":
        //     title = "bg-light";
        //     break;
        //   case "playlist_action":
        //     title = "bg-dark";
        //     break;

        //   default:
        //     break;
            
        // }

        return (
          <tr key={idx}>
            <td id={title}>{payload.keys}</td>
            <td>{payload.action}</td>
          </tr>
        );
      });

      return <>{content}</>;
    });
  }

  return (
    <Container className="mt-4">
      <h3>FL Studio Shortcuts</h3>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Shortcut</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{data}</tbody>
      </Table>
    </Container>
  );
};

export default CategoryList;
