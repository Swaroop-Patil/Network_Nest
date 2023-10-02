import React from "react";

class AddContact extends React.Component {   //class component
  state = {                 //class state
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();  //predef for page not get refreshed as we r using button
    if (this.state.name === "" || this.state.email === "") {  //if nothing enetred
      alert("ALl the fields are mandatory!"); 
      return;
    }
    this.props.addContactHandler(this.state);//using handler passed frm App component as prop
    this.setState({ name: "", email: "" });//to clear name and email fields when we click on add //update state with setstate
  };
 
 
  render() {      //creting a form with help of render()
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>   {/*to submit the form*/}
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}  //event onChange //setState to update the state //ss(event.t.val)
            />                                                      
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
             value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;