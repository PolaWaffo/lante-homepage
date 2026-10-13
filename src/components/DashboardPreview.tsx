
import  Dashboard  from "../../public/assets/dashboard.jpg";

export function DashboardPreview() {
  return (
    <div
      className="dashboard-preview relative w-full max-w-full overflow-visible"
      role="img"
      aria-label="Lante dashboard preview with maintenance costs, income and a calendar"
    >
      <img
        className="block w-full rounded-t-[28px]"
        src={Dashboard}
        alt="Lante dashboard preview"
      />

      <div className="absolute left-3 top-24 z-20 w-32 rounded-md border-2 border-white bg-white p-2 text-center text-navy shadow-lg">
        <img
          src="/assets/property.jpg"
          alt=""
          className="h-16 w-full rounded object-cover"
        />

        <div className="relative z-10 mx-auto -mt-5 h-12 w-12 rounded-full border-4 border-sky-100 bg-orange/80" />

        <span className="relative z-20 -top-2 rounded-full bg-orange px-2 py-1 text-[8px] text-white">
          Landlord
        </span>

        <p className="pb-1 text-[10px]">Tracy Waseka</p>
      </div>
    </div>
  );
}

