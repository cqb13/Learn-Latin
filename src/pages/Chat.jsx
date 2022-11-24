import { useEffect, useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, orderBy, limit, query, addDoc, getDoc, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const Chat = () => {
  const [user] = useAuthState(auth);

  const users = collection(db, "users");

  const messageRef = collection(db, "messages");
  const queryRef = query(messageRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(queryRef, { idField: "id" });
  const [userList] = useCollectionData(users, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const scrollTo = useRef(null);

  useEffect(() => {
    scrollTo.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!user || !formValue) return;

    const payload = {
      text: formValue,
      createdAt: serverTimestamp(),
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
    };

    await addDoc(messageRef, payload);

    setFormValue("");
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return (
      signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const userRef = doc(users, user.uid);
        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
          await setDoc(userRef, {
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          });
        }
      })
    );
  };

  const googleSignOut = () => {
    signOut(auth);
  };

  const UserList = () => {
    const UserListItem = ({image, name}) => {
      console.log(image, name);
      return (
      <div className="User-Info">
        <p>{name}</p>
        <img src={image} alt="User PFP" />
      </div>
      );
    }

    return (
      <>
        {userList?.length > 0 ? (
            <>
            {userList.map((info) => (
              <UserListItem image={info.photoURL} name={info.displayName}/>
            ))}
            </>
        ) : (<></>)}
      </>
    );
  };

  return (
    <div>
      <header>
        <h1>Chat</h1>
      </header>
      <hr />
      <main>
        <div className="Main-Area">
          <div className="Info-Container">
            <div className="User-Container">
              <UserList />
            </div>
            {user ? (
              <button className="Account-Button" onClick={googleSignOut}>Sign Out</button>
            ) : (
              <button className="Account-Button" onClick={googleSignIn}>Sign In</button>
            )}
          </div>
          <div className="Message-Container">
            {user ? (
              messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)
            ) : (
              <p>Please sign in to chat!</p>
            )}
            <div ref={scrollTo}></div>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Enter a message" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
          <button onClick={sendMessage} className="Send-Button">Send</button>
        </form>
      </main>
    </div>
  );
};

const ChatMessage = (props) => {
  if (!auth.currentUser) return;

  const { text, uid, photoURL, displayName } = props.message;

  const className = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={className}>
      <p>{text}</p>
      <div className="User-Info">
        <p>{displayName}</p>
        <img src={photoURL} alt="User PFP" />
      </div>
    </div>
  );
};

export default Chat;
