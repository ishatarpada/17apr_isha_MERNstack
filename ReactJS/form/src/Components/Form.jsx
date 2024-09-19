export const Form = ({ children, vertical = true, getValue = null, ...rest }) => {

  /*   const register = (e) => {
      e.preventDefault();
      const form = e.target;
      const values = {};
  
      const filedLength = form.children.length;
      const keys = Object.keys(form.elements);
      const items = keys.slice(filedLength);
      for (let item of items) {
        let value = form.elements[item].value;
        values[item] = value;
      }
      getValue(values);
    } */


  const register = (e) => {
    e.preventDefault();
    const form = e.target;
    const values = {};

    Array.from(form.elements).forEach(element => {
      if (element.name) {
        values[element.name] = element.value;
      }
    });

    getValue(values , form);
  };


  return (
    <>
      <form
        className={`flex ${vertical ? `flex-col` : `flex:row`} gap-4 my-5`}
        {...rest}
        onSubmit={register}
      >
        {children}
        <button
          type="submit"
          className="bg-lime-300 rounded-xl text-xl font-serif py-3 px-8 text-black font-bold">
          Submit
        </button>
      </form>
    </>
  )
}


export const Input = ({ ...rest }) => {
  return (
    <>
      <input className="w-full px-3 py-2 border border-gray-800 rounded mb-3" {...rest} />
    </>
  )
}

export const Label = ({ children, ...rest }) => {
  return (
    <>
      <label className="text-md font-medium font-serif text-gray-800">{children}</label>
    </>
  )
}