import React from "react";

const AnnouncementCard = ({ icon, iconColor, title, description, time }) => {
  return (
    <div className="flex gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
      <div className={`mt-1 size-8 shrink-0 rounded-full ${iconColor} flex items-center justify-center`}>
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{description}</p>
        <p className="text-[10px] text-slate-400 mt-2 font-medium">{time}</p>
      </div>
    </div>
  );
};

export default AnnouncementCard;

// import React from "react";



// const AnnouncementCard = ({ data }) => {
//   return (
//     <>
//       {data.map((annc, index) => {
//         const { icon, iconColor, title, description, time } = annc;

//         return (
//           <div
//             key={index}
//             className="flex gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//           >
//             <div
//               className={`mt-1 w-8 h-8 shrink-0 rounded-full ${iconColor} flex items-center justify-center`}
//             >
//               <span className="material-symbols-outlined text-[18px]">
//                 {icon}
//               </span>
//             </div>
//             <div>
//               <h4 className="text-sm font-bold text-slate-900 dark:text-white">
//                 {title}
//               </h4>
//               <p className="text-xs text-slate-500 mt-1 line-clamp-2">
//                 {description}
//               </p>
//               <p className="text-[10px] text-slate-400 mt-2 font-medium">
//                 {time}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };


// export default AnnouncementCard;
