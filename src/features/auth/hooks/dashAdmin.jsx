import { dashboardAdmin } from '../api/authApi';

const handleDashboardAdmin = async () => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    console.error('No token found');
    return;
  }

  console.log(token);
  

  await dashboardAdmin(token).then((response) => {
    console.log('Admin dashboard data:', response);
  }).catch((error) => {
    console.error('Error fetching admin dashboard data:', error);
  });
};

export default handleDashboardAdmin;