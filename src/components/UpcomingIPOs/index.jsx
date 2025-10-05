import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "./UpcomingIPOs.scss";

const data = [
  {
    company: "Rubicon Research Ltd. IPO",
    ipo_date: "09 Oct - 13 Oct",
    ipo_type: "BSE, NSE",
    ipo_size: "₹1,377.50 Cr",
    price_band: "₹461.00 to ₹485.00",
    gmp: "-",
    logo: "https://example.com/logos/rubicon.png",
  },
  {
    company: "Mittal Sections Ltd. IPO",
    ipo_date: "07 Oct - 09 Oct",
    ipo_type: "BSE SME",
    ipo_size: "₹52.91 Cr",
    price_band: "₹136.00 to ₹143.00",
    gmp: "-",
    logo: "https://example.com/logos/mittal-sections.png",
  },
  {
    company: "Anantam Highways Trust InvIT IPO",
    ipo_date: "07 Oct - 09 Oct",
    ipo_type: "BSE, NSE",
    ipo_size: "₹400.00 Cr",
    price_band: "₹100.00",
    gmp: "-",
    logo: "https://example.com/logos/anantam-highways.png",
  },
  {
    company: "LG Electronics India Ltd. IPO",
    ipo_date: "07 Oct - 09 Oct",
    ipo_type: "BSE, NSE",
    ipo_size: "₹11,607.01 Cr",
    price_band: "₹1,080.00 to ₹1,140.00",
    gmp: "146 (12.81%)",
    logo: "https://example.com/logos/lg-electronics.png",
  },
  {
    company: "Tata Capital Ltd. IPO",
    ipo_date: "06 Oct - 08 Nov",
    ipo_type: "BSE, NSE",
    ipo_size: "₹15,511.87 Cr",
    price_band: "₹310.00 to ₹326.00",
    gmp: "20 (6.13%)",
    logo: "https://example.com/logos/tata-capital.png",
  },
  {
    company: "WeWork India Management Ltd. IPO",
    ipo_date: "03 Oct - 07 Oct",
    ipo_type: "BSE, NSE",
    ipo_size: "₹3,000.00 Cr",
    price_band: "₹615.00 to ₹648.00",
    gmp: "15 (2.31%)",
    logo: "https://example.com/logos/wework.png",
  },
  {
    company: "Munish Forge Ltd. IPO",
    ipo_date: "30 Sep - 03 Oct",
    ipo_type: "NSE SME",
    ipo_size: "₹73.92 Cr",
    price_band: "₹91.00 to ₹96.00",
    gmp: "-",
    logo: "https://example.com/logos/munish-forge.png",
  },
  {
    company: "Shlokka Dyes Ltd. IPO",
    ipo_date: "30 Sep - 06 Oct",
    ipo_type: "BSE SME",
    ipo_size: "₹63.50 Cr",
    price_band: "₹95.00 to ₹100.00",
    gmp: "10 (10.00%)",
    logo: "https://example.com/logos/shlokka-dyes.png",
  },
  {
    company: "Evergreen Polymers Ltd. IPO",
    ipo_date: "10 Oct - 14 Oct",
    ipo_type: "NSE SME",
    ipo_size: "₹48.25 Cr",
    price_band: "₹72.00 to ₹76.00",
    gmp: "5 (6.94%)",
    logo: "https://example.com/logos/evergreen-polymers.png",
  },
  {
    company: "Zenith Agro Industries Ltd. IPO",
    ipo_date: "11 Oct - 15 Oct",
    ipo_type: "BSE SME",
    ipo_size: "₹58.00 Cr",
    price_band: "₹120.00 to ₹125.00",
    gmp: "-",
    logo: "https://example.com/logos/zenith-agro.png",
  },
  {
    company: "Orbit Finserv Ltd. IPO",
    ipo_date: "12 Oct - 16 Oct",
    ipo_type: "BSE, NSE",
    ipo_size: "₹850.00 Cr",
    price_band: "₹305.00 to ₹325.00",
    gmp: "32 (9.84%)",
    logo: "https://example.com/logos/orbit-finserv.png",
  },
  {
    company: "Prime Plastics Ltd. IPO",
    ipo_date: "13 Oct - 17 Oct",
    ipo_type: "NSE SME",
    ipo_size: "₹66.40 Cr",
    price_band: "₹80.00 to ₹84.00",
    gmp: "-",
    logo: "https://example.com/logos/prime-plastics.png",
  },
  {
    company: "Harita Finance Ltd. IPO",
    ipo_date: "15 Oct - 18 Oct",
    ipo_type: "BSE, NSE",
    ipo_size: "₹1,225.00 Cr",
    price_band: "₹410.00 to ₹430.00",
    gmp: "28 (6.82%)",
    logo: "https://example.com/logos/harita-finance.png",
  },
  {
    company: "TechNova Solutions Ltd. IPO",
    ipo_date: "18 Oct - 21 Oct",
    ipo_type: "BSE, NSE",
    ipo_size: "₹2,340.00 Cr",
    price_band: "₹560.00 to ₹585.00",
    gmp: "75 (12.82%)",
    logo: "https://example.com/logos/technova.png",
  },
];

const columnDetailMapping = {
  logo: { label: "", index: 1, type: "logo" },
  company: { label: "Company", index: 2 },
  ipo_date: { label: "IPO Date", index: 3 },
  ipo_type: { label: "IPO Type", index: 4 },
  ipo_size: { label: "IPO Size", index: 5 },
  price_band: { label: "Price Band", index: 6 },
  gmp: { label: "GMP(₹)", index: 7 },
};

const UpcomingIPOs = () => {
  return (
    <div className="UpcomingIPOs">
      <div className="main-heading">
        Open / Upcoming <span className="highlighted">IPOs</span>
      </div>
      {data && <IPOTable data={data} />}
    </div>
  );
};

const IPOTable = ({ data }) => {
  const tableArray = Object.keys(data[0])
    .map((n) => ({
      key: n,
      ...(columnDetailMapping[n] || {}),
    }))
    .sort((a, b) => (a.index || 99) - (b.index || 99));

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: "30rem",
        overflowY: "auto",
        borderRadius: 3,
        boxShadow: 0,
        backgroundColor: "transparent",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {tableArray.map((col, i) => (
              <TableCell key={i}>{col.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={i}
              hover
              sx={{
                "& td": {
                  borderBottom: "1px solid rgba(224, 224, 224, 1)", // row border
                },
              }}
            >
              {tableArray.map((col, i) => (
                <TableCell key={i}>
                  {col.type === "logo" ? (
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <Avatar
                        src={row.logo}
                        alt={row.company}
                        sx={{ width: 32, height: 32 }}
                      />
                    </Box>
                  ) : (
                    row[col.key]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UpcomingIPOs;
