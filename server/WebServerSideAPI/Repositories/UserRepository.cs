using WebServerSideAPI.Models;

namespace WebServerSideAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        public Users Signup(Users users)
        {
            users.Password = BCrypt.Net.BCrypt.HashPassword(users.Password);
            return users; 
        }
    }
}
