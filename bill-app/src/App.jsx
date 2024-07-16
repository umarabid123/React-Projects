import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
const [selectedFriend, setSelectedFriend] = useState(null)

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleSelectingFriend(friend) {
    setSelectedFriend(friend => (!friend));
  }
  
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false)
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList friends={friends} onHendleFriend ={handleSelectingFriend} selectedFriend ={selectedFriend} />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
       {selectedFriend && <FormSpiltBill selectedFriend ={selectedFriend} />}
      </div>
    </>
  );
}

export default App;

function FriendList({ friends, onHendleFriend , selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}  onHendleFriend ={onHendleFriend}/>
      ))}
    </ul>
  );
}

function Friend({ friend , onHendleFriend, selectedFriend}) {

  // const isSelected = selectedFriend.id == friend.id;
  return (
    <li >
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance == 0 && <p>You and {friend.name} are even </p>}
      <button className="button" onClick={() => onHendleFriend(friend)}>{selectedFriend ? "Close" : "Select"}</button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmission(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID;

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend)


    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmission}>
      <label>👫Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌄 Image URL</label>
      <input type="text" onChange={(e) => setImage(e.target.value)} />

      <Button>Add Friend</Button>
    </form>
  );
}

function FormSpiltBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill Value</label>
      <input type="text" />
      <label>🧍‍♂️Your expenses</label>
      <input type="text" />
      <label>👫{selectedFriend.name} expense</label>
      <input type="text" disabled />
      <label>🤑Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
