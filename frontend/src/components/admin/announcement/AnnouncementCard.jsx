const AnnouncementCard = ({ data }) => {
  return (
    <div className="rounded-2xl bg-white border border-[#e7edf3] p-2 shadow-sm hover:shadow-md transition">
      <h4 className="text-lg font-bold mb-2">{data.title}</h4>
      <p className="text-sm text-[#4c739a] mb-3">{data.message}</p>
      <div className="flex text-xs text-[#4c739a] items-center  justify-end">
        
        <span className="text-red-800 ">{data.target}</span>
      </div>
    </div>
  );
};

export default AnnouncementCard;
