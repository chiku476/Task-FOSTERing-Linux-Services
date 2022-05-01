import { React, useState, useEffect } from "react";
import SingleUser from "./SingleUser";

const AllUser = () => {
  const [result, setResult] = useState(0);

  useEffect(async () => {
    // Update the document title using the browser API

    try {
      const resultFetch = await fetch("http://localhost:8080/users");
      const result = await resultFetch.json();
      setResult(result);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(result);

  return (
    <div>
      <table className="table table-bordered">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {result.length > 0
          ? result.map((item) => <SingleUser user={item} />)
          : "no User"}
      </table>
    </div>
  );
};
export default AllUser;
