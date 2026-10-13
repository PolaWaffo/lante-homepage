
import  Dashboard  from "../../public/assets/dashboard.jpg";
export function DashboardPreview() {
  return (
    <div
      className="dashboard-preview relative w-full max-w-full overflow-hidden"
      role="img"
      aria-label="Lante dashboard preview with maintenance costs, income and a calendar"
    >
     <img className="rounded-t-[28px]" src={Dashboard} alt="Lante dashboard preview" />
    </div>
  );
}
