import React from "react";

export default function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === 1 ? "sent" : "received";
  const imageURL =
    uid === 1
      ? "https://img.icons8.com/color/48/000000/fox.png"
      : "https://avatars.dicebear.com/api/bottts/Coo.svg?colors[]=blue&colorful=1";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={imageURL} />
        {text === "thinking..." ? <Typing /> : <p>{text}</p>}
      </div>
    </>
  );
}

const Typing = () => (
  <div className="typing">
    <div className="typing-dot"></div>
    <div className="typing-dot"></div>
    <div className="typing-dot"></div>
  </div>
);

// import React from "react";

// export default class ChatMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//     const { text, uid } = props.message;

    
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     logErrorToMyService(error, errorInfo);
//   }

  

//   render() {
//     if (this.state.hasError) {

//       // You can render any custom fallback UI
//       return (
//         <>
//           <div className={`message ${messageClass}`}>
//             <img src={imageURL} />
//             {text === "thinking..." ? (
//               <Typing />
//             ) : (
//               <p>Oops.. Something went wrong!</p>
//             )}
//           </div>
//         </>
//       );
//     } else if (!this.state.hasError) {
//       return (
//         <>
//           <div className={`message ${messageClass}`}>
//             <img src={imageURL} />
//             {text === "thinking..." ? <Typing /> : <p>{text}</p>}
//           </div>
//         </>
//       );
//     }
//   }
// }

// const Typing = () => (
//   <div className="typing">
//     <div className="typing-dot"></div>
//     <div className="typing-dot"></div>
//     <div className="typing-dot"></div>
//   </div>
// );

// const messageClass = uid === 1 ? "sent" : "received";
// const imageURL = uid === 1 ? "https://img.icons8.com/color/48/000000/fox.png" : "https://avatars.dicebear.com/api/bottts/Coo.svg?colors[]=blue&colorful=1";