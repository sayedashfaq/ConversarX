const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              "https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
            }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi What's Up..?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
  12:44
      </div>
    </div>
  );
};

export default Message;
