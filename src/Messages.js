import React from "react";

const Messages = () => {
  return (
  <div>
    <form>
      <input style={{width: '500px' , height: '100px'}} type='text' name='message' placeholder="Type Your Message here" />
      <input type='submit' value='Send Message'/>
    </form>
  </div>
  )
}

export default Messages