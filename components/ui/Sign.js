
import { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

// const SignComponent = () => {
//   const [signature, setSignature] = useState(null);
//   const canvasRef = useRef(null);

//   const handleClear = () => {
//     canvasRef.current.clear();
//   };

//   const handleSave = () => {
//     const dataUrl = canvasRef.current.toDataURL();
//     localStorage.setItem('signature', dataUrl);
//   };

//   return (
//     <>
//       <div className="signature-container">
//         <SignatureCanvas
//           canvasProps={{ className: "sig-canvas" }}
//           ref={canvasRef}
//           onEnd={() => setSignature(canvasRef.current.toDataURL())}
//         />
//       </div>
//       <div className="button-container">
//         <button className="button-clear" onClick={handleClear}>Clear</button>
//         <button className="button-save" onClick={handleSave}>Save</button>
//       </div>
//     </>
//   );
// };

// export default SignComponent;



const SignComponent = () => {
  const [signature, setSignature] = useState(null);
  const canvasRef = useRef(null);

  const handleClear = () => {
    canvasRef.current.clear();
  };

  const handleSave = () => {
    const dataUrl = canvasRef.current.toDataURL();
    localStorage.setItem('signature', dataUrl);
  };

  return (
    <>
      <div className="signature-container">
        <SignatureCanvas
          canvasProps={{ className: "sig-canvas" }}
          ref={canvasRef}
          onEnd={() => setSignature(canvasRef.current.toDataURL())}
        />
      </div>
      <div className="button-container">
        <button className="button-clear" onClick={handleClear}>Clear</button>
        <button className="button-save" onClick={handleSave}>Save</button>
      </div>
    </>
  );
};

export default SignComponent;


