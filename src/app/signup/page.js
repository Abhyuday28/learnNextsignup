"use client";
const Signup = () => {
  const createAccount = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password, roll } = e.currentTarget;

      const data = {
        name: name.value,
        email: email.value,
        password: password.value,
        roll: roll.value,
      };

      if(!data.name || !data.email || !data.password || !data.roll)
        {
          return console.log('please fill all fields')
        }
     

      const res = await fetch('/api/signup',{
        method:"post",
        body: JSON.stringify(data)
      })

      const responseData = await res.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-2/5 bg-gray-50">
        <form className="flex flex-col" onSubmit={createAccount}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="flex flex-col gap-2" title="eg: LE-20345 or 21345">
            <label htmlFor="roll">Roll</label>
            <input type="text" id="roll" name="roll" className="uppercase" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button>Create an Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
