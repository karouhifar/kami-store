using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebServerSideAPI.Models;

namespace WebServerSideAPI.Repositories
{
    public interface IJWTManagerRepository
    {
        Tokens Authenticate(Users users);
    }
}
