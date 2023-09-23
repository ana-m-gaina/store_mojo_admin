import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { useAllUsers } from "../../hooks/useAllUsers";
import "./home.css";

export default function Home() {
  const { data:userData, isLoading:userLoading, error:userError } = useAllUsers();

  if (userError) return <p> {error.message} </p>;
  if (userLoading) return <p>Loading...</p>;
  if (!userData) return <p> Users not found....</p>;

  userData.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    if (dateA > dateB) {
      return -1;
    } else if (dateA < dateB) {
      return 1;
    } else {
      return 0;
    }
  });

  const first5Items = userData.slice(0, 5);


  return (
    <div className="home">
      <FeaturedInfo />
      <Chart/>
       <div className="homeWidgets">
        <WidgetSm users={first5Items} />
        <WidgetLg users={first5Items} />
      </div> 
    </div>
  );
}
