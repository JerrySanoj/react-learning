import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const renderRegistration = () => {
    return (
      <div className="flex-cointainer">
        <h2>Registration Form</h2>
        <form>
          <label for="username">User Name:</label>
          <br></br>
          <input
            required
            type="text"
            placeholder="Enter Name"
            id="username"
            name="username"
          ></input>
          <br></br>
          <label for="email">Email ID:</label>
          <br></br>
          <input
            type="email"
            placeholder="Enter Email ID"
            id="email"
            name="email"
          ></input>
          <br></br>
          <label for="number">Number:</label>
          <br></br>
          <input
            type="number"
            placeholder="Enter Number"
            id="number"
            name="number"
          ></input>
          <br></br>
          <label for="date">Birth Date</label>
          <br></br>
          <input type="date" id="date" name="date"></input>
          <br></br>
          <p> Gender</p>
          <label for="gender">Male</label>
          <input type="radio" id="gender" name="gander"></input>
          <label for="gender">Female</label>
          <input type="radio" id="gender" name="gander"></input>
          <label for="gender">Others</label>
          <input type="radio" id="gender" name="gander"></input>
          <br></br>
          <label for="address">Address</label>
          <br></br>
          <input
            type="text-area"
            placeholder="Enter Address"
            id="code"
            name="address"
          ></input>
          <br></br>
          <label for="country">Country</label>
          <br></br>
          <select id="country" name="country">
            <option value="">Select a country</option>
            <option value="ind">India</option>
            <option value="uk">United Kingdom</option>
            <option value="india">India</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="germany">Germany</option>
          </select>
          <br></br>
          <label for="code">Postal Code</label>
          <br></br>
          <input
            type="number"
            placeholder="Enter Code"
            id="code"
            name="code"
          ></input>
          <br></br>
          <input type="submit" value="SUBMIT"></input>
          <br></br>
          <label for="subsribe">subsribe</label>
          <input type="checkbox" id="subsribe" name="subcribe"></input>
          <br></br>
          <label for="file">Upload a file:</label>
          <br></br>
          <input type="file" id="file" name="file"></input>
          <br></br>
        </form>
      </div>
    );
  };

  const renderTable = () => {
    const tableData = [
      {
        name: "Jerry",
        email: "jerrysanoj@gmail.com",
        phone: 274926485,
        date: "2005-01-19",
        gender: "Male",
        address: "11 main street",
        country: "india",
        "postal code": "000642",
        subcribe: true,
      },
      {
        name: "sanoj",
        email: "sanoj@gmail.com",
        phone: 7483649403,
        date: "2004-01-05",
        gender: "Male",
        address: "123 church road",
        country: "India",
        "postal code": "865498",
        subcribe: false,
      },
      {
        name: "jonny",
        email: "jonny@gmail.com",
        phone: 2903678406,
        date: "1990-05-20",
        gender: "Male",
        address: "342 COIMBATORE",
        country: "india",
        "postal code": "32487",
        subcribe: true,
      },
    ];
    return (
      <div className="flex-container">
        <h1>Details In Table</h1>
        <table border="2">
          <tr>
            <th>UserName</th>
            <th>EmailID</th>
            <th>Number</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Country</th>
            <th>Postal Code</th>
            <th>subcribe</th>
          </tr>
          {tableData.map((x) => {
            return (
              <tr>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.phone}</td>
                <td>{x.date}</td>
                <td>{x.gender}</td>
                <td>{x.address}</td>
                <td>{x.country}</td>
                <td>{x["postal code"]}</td>
                <td>{x.subcribe}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  };

  return (
    <div>
      {renderRegistration()}
      {renderTable()}
    </div>
  );
};

export default App;
