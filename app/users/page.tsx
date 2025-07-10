export default async function Users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users &&
          users.map((user: { id: number; name: string }) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
            </li>
          ))}
      </ul>{" "}
    </>
  );
}
