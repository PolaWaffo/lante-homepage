
import  Dashboard  from "../../public/assets/dashboard.jpg";
export function DashboardPreview() {
  return (
    <div
      className="dashboard-preview relative w-full max-w-full overflow-hidden"
      role="img"
      aria-label="Lante dashboard preview with maintenance costs, income and a calendar"
    >
     <img className="rounded-t-[28px]" src={Dashboard} alt="Lante dashboard preview" />
        <div className="absolute -left-[13%] top-24 z-10 hidden w-[26%] rounded-md border-2 border-white bg-white p-1 text-center text-navy sm:block">
        <img
          src="/assets/property.jpg"
          alt=""
          className="h-16 w-full rounded object-cover"
        />
        <div className="mx-auto absolute z-15 -mt-5 h-12 w-12 rounded-full border-4 border-sky-100 bg-orange/80" />
        <span className="relative -top-2 rounded-full bg-orange px-1 text-[5px] text-white">
          Landlord
        </span>
        <p className="pb-1 text-[8px]">Tracy Waseka</p>
      </div>
    </div>
  );
}
