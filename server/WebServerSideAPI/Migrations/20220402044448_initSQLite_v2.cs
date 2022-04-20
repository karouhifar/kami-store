using Microsoft.EntityFrameworkCore.Migrations;

namespace WebServerSideAPI.Migrations
{
    public partial class initSQLite_v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Picture",
                table: "Products",
                type: "TEXT",
                maxLength: 10000,
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "productID",
                keyValue: 1,
                columns: new[] { "Picture", "productName" },
                values: new object[] { "https://m.media-amazon.com/images/I/71nK57McdyL._AC_SX679_.jpg", "Hard Drive" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "productID",
                keyValue: 2,
                column: "Picture",
                value: "https://techcrunch.com/wp-content/uploads/2020/10/Apple_announce-iphone12pro_10132020.jpg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Picture",
                table: "Products");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "productID",
                keyValue: 1,
                column: "productName",
                value: "Hard Derive");
        }
    }
}
