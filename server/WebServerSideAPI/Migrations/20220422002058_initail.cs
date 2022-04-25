using Microsoft.EntityFrameworkCore.Migrations;

namespace WebServerSideAPI.Migrations
{
    public partial class initail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    CategoryId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CategoryName = table.Column<string>(type: "TEXT", maxLength: 15, nullable: false),
                    Description = table.Column<string>(type: "TEXT", maxLength: 10000, nullable: true),
                    Picture = table.Column<string>(type: "TEXT", maxLength: 10000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    productID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    productName = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    supplierId = table.Column<int>(type: "INTEGER", nullable: false),
                    quantityPerUnit = table.Column<int>(type: "INTEGER", nullable: false),
                    unitPrice = table.Column<decimal>(type: "numeric", nullable: false),
                    unitsInStock = table.Column<int>(type: "INTEGER", nullable: false),
                    unitsOnOrder = table.Column<int>(type: "INTEGER", nullable: false),
                    reorderLevel = table.Column<int>(type: "INTEGER", nullable: false),
                    discontinued = table.Column<bool>(type: "INTEGER", nullable: false),
                    Picture = table.Column<string>(type: "TEXT", maxLength: 10000, nullable: true),
                    CategoryId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.productID);
                    table.ForeignKey(
                        name: "FK_Products_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryId", "CategoryName", "Description", "Picture" },
                values: new object[] { 1, "Electronics", "The field of electronics is a branch of physics and electrical engineering that deals with the emission, behavior and effects of electrons using electronic devices", "https://upload.wikimedia.org/wikipedia/commons/f/f5/Electronic_circuit.jpg" });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "productID", "CategoryId", "Picture", "discontinued", "productName", "quantityPerUnit", "reorderLevel", "supplierId", "unitPrice", "unitsInStock", "unitsOnOrder" },
                values: new object[] { 1, 1, "https://m.media-amazon.com/images/I/71nK57McdyL._AC_SX679_.jpg", true, "Hard Drive", 43, 5, 235, 43.6m, 7, 3 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "productID", "CategoryId", "Picture", "discontinued", "productName", "quantityPerUnit", "reorderLevel", "supplierId", "unitPrice", "unitsInStock", "unitsOnOrder" },
                values: new object[] { 2, 1, "https://www.cnet.com/a/img/resize/6332121a72aa55809d320f7315d15f9983270b63/2021/09/21/643c0f64-e568-4fbc-94be-d6dde9acd27c/iphone-13-pro-max-cnet-review-2021-128.jpg?auto=webp&width=940", false, "Iphone", 45, 2, 532, 53.6m, 2, 6 });

            migrationBuilder.CreateIndex(
                name: "IX_Products_CategoryId",
                table: "Products",
                column: "CategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
