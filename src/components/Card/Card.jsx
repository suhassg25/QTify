import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const Section = ({ title, children, onToggle, isCollapsed }) => {

  return (
    <div style={{ backgroundColor: "#121212"}}>
      <div className="d-flex justify-content-between align-items-center mb-4 ps-3 pe-3">
        <p style={{color : "#FFFFFF", fontSize : 20, fontWeight : 600}} className="text-2xl font-bold">{title}</p>
        <Button  variant="text" onClick={onToggle}>{isCollapsed ? "Show All" : "Collapse"}</Button>
      </div>
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
};



function Cards (data) {
    return(
        <Card className="column ms-2" sx={{ width: 159, height :"232px", padding : 0, backgroundColor:"#121212", borderRadius : "0", position : "relative"}}>
            <CardContent sx={{height :"205px", padding : "5px", borderRadius : "20px", overflow : "hidden"}}> 
        <div style={{backgroundColor:"#FFFFFF", width: "100%", height: "100%", display : "flex", flexDirection : "column", justifyContent : "space-evenly", alignItems : "flex-start"}}> 
        <CardMedia
            sx={{ width:"100%", padding : 0, marginTop : -1 }}
          component="img"
          height="170"
          image={data.image}
          alt={data.title}
        />
        <Chip label={`100 Follows`} sx={{backgroundColor:"#121212", color:"#FFFFFF", height:"15px", marginLeft : "5px"}}/>
        </div>
        </CardContent>
          <Typography gutterBottom variant="p" component="div" sx={{color:"#FFFFFF", fontSize : "12px", fontWeight : "600", position : "absolute", left : 5}}>
            {data.title}
          </Typography>
    </Card>
    )
}

export {Cards, Section};