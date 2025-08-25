import React from 'react';

const Register = () => {
    return (
        <div>
       
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Here!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
             <label className="label">Name</label>
          <input type="email" className="input" placeholder="Name" />
           <label className="label">Age</label>
          <input type="email" className="input" placeholder="Age" />
           <label className="label">Phone Number</label>
          <input type="email" className="input" placeholder="Phone Number" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn bg-green-400 text-white mt-4">Register</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;