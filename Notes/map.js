Mapping: - a type of data structure or data collection that is used to store the data in the form of key and value pairs.


const users = ['Alice', 'Bob', 'Charlie', 'Dave'];

<ul>
  {users.map((user, index) => (
    <li key={index}>{user}</li>
  ))}
</ul>