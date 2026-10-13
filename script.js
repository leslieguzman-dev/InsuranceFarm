
const searchInput = document.getElementById("ticketSearch");
const statusFilter = document.getElementById("statusFilter");
const resultCount = document.getElementById("resultCount");

const tableRows = document.querySelectorAll(
    "#requests tbody tr"
);

function filterTickets() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedStatus = statusFilter.value;

    let visibleCount = 0;

    tableRows.forEach(function(row) {
        const ticketId = row.cells[0].textContent.toLowerCase();
        const subject = row.cells[1].textContent.toLowerCase();

        const statusLabel = row.querySelector(".status");
        const ticketStatus = statusLabel.classList[1];

        const matchesSearch =
            ticketId.includes(searchText) ||
            subject.includes(searchText);

        const matchesStatus =
            selectedStatus === "all" ||
            ticketStatus === selectedStatus;

        if (matchesSearch && matchesStatus) {
            row.style.display = "";
            visibleCount++;
        } else {
            row.style.display = "none";
        }
    });

    resultCount.textContent =
        "Showing " + visibleCount + " of " +
        tableRows.length + " requests";
}

searchInput.addEventListener("input", filterTickets);
statusFilter.addEventListener("change", filterTickets);

filterTickets();
