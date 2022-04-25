using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebServerSideAPI.Models;

namespace WebServerSideAPI.Repositories
{
    public class JWTManagerRepository : IJWTManagerRepository
    {
        Dictionary<string, string> UsersRecords = new Dictionary<string, string>
    {
        { "user1","password1"},
    };
        private readonly IConfiguration iconfiguration;
        public JWTManagerRepository(IConfiguration iconfiguration)
        {
            this.iconfiguration = iconfiguration;
        }

        public Tokens Authenticate(Users users)
        {
            if (!UsersRecords.Any(x => x.Key == users.Name && x.Value == users.Password))
                 throw new AccessViolationException();

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = System.Text.Encoding.UTF8.GetBytes(iconfiguration["JWT:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new List<Claim>
                  {
                     new Claim(ClaimTypes.Name, users.Name)
                  }),
                Expires = DateTime.UtcNow.AddMinutes(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return new Tokens() { Token = tokenHandler.WriteToken(token) };
        }
    }
}
