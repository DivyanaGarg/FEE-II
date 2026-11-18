// function Input({ label, type, placeholder, value, onChange }) {
//   return (
//     <>
//       <div>
//         <label>{label} : </label>
//         <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
//       </div>
//     </>
//   );
// }

function Input({label, ...props}) {
  return (
    <div>
      <label>{label} : </label>
      <input {...props} />
    </div>
  );
}

export default Input;