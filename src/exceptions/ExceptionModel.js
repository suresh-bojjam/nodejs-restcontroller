/*
  exception model class responsible for read the error code and message from the file
  and create exception json object which we need to respond to user.

  exception model should be able to get the 'response' object from controller/service class and write error message.
  data flow would be like
    controller -> service class method -> query -> service method response
    controller -> service class method -> exception model
*/
function StyleMeException(){
  
}
