import { useEffect, useState } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';

export default function ShortcutsPage() {
  const [shortcuts, setShortcuts] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(setShortcuts);
  }, []);

  if (!shortcuts) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" />
      </Container>
    );
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

        <tbody>
          {shortcuts.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.shortcut}</td>
              <td>{entry.action}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
