import axios from "axios";
import { useDataSource } from "./data-source.hook";
import { useCallback } from "react";

const fetchFromServer = async (resourceUrl) => {
  const response = await axios.get(resourceUrl)
  return response.data
}

export const UserInfo = ({ userId }) => {
  // const user = useDataSource(() => fetchFromServer(`/users/${userId}`));

  // useDataSource runs its useEffect whenever the callback function’s reference
  // changes during the rendering of the UserInfo component.
  // To avoid unnecessary re-triggers, we memoize the callback function with useCallback,
  // providing the appropriate dependency array.
  const fetchUserCb = useCallback(() => fetchFromServer(`/users/${userId}`), [userId])
  const user = useDataSource(fetchUserCb);



  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
