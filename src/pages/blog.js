// import React from 'react';
// import Grid from "@material-ui/core/Grid";
//
// import makeStyles from '@material-ui/core/styles/makeStyles';
// import Card from "@material-ui/core/Card";
//
// const blogStyles = makeStyles({
//     heading: {
//         background: '#221E1F',
//         height: '3rem',
//     },
//     background: {
//         width: '100vw',
//         height: '100vh',
//         // background: '#FFE6F0',
//         background: '#F0F5F5',
//     },
//     layout: {
//         height: '100vh',
//         width: '95vw',
//         marginLeft: '2.5vw',
//         marginTop: '2.5vw',
//         position: 'fixed',
//     },
//     card: {
//         boxShadow: 'none',
//         height: '85vh',
//         borderRadius: '10px',
//     },
//     titleCard: {
//         backgroundColor: 'rgb(20, 35, 75)', //FEEACC
//         width: '30vw',
//
//         color: '#FFFFFF',
//         paddingTop: '2rem',
//         paddingLeft: '1rem',
//     },
//     header: {
//         paddingTop: '1rem',
//         fontFamily: 'Playfair Display',
//         fontWeight: 'bold',
//         fontSize: '42px',
//     },
//     headerTwo: {
//         fontFamily: 'Playfair Display',
//         fontWeight: 'bold',
//         fontSize: '32px',
//     },
//     baseCard: {
//         backgroundColor: '#FFFFFF', //FFFFFF
//         color: '#444444',
//         width: '62.5vw',
//     },
//     scroll: {
//         flexGrow: '1',
//         overflow: 'scroll',
//         height: '85%',
//         width: '35vw',
//         overflowX: 'hidden',
//         position: 'absolute',
//     },
//     p: {
//        fontFamily: 'Montserrat',
//     },
// });
//
// const Blog = () => {
//     const classes = blogStyles();
//     return (
//         <div className={classes.background}>
//             <div className={classes.heading}></div>
//             <Grid container justify="space-between" className={classes.layout}>
//                 <Grid item raised="false">
//                     <Card className={`${classes.card} ${classes.titleCard}`}>
//                             <Grid container justify="center" className={classes.header}>Blog Post One</Grid>
//                     </Card>
//                 </Grid>
//                 <Grid item>
//                     <Card className={`${classes.card} ${classes.baseCard}`}>
//                             <Grid container justify="center" >
//                                 <Grid item xs={6} className={classes.scroll}>
//                                         <Grid container direction="column" spacing={2} style={{
//                                             marginTop:'5rem',
//                                         }}>
//                                             <Grid item className={classes.headerTwo}>
//                                                 Problem
//                                             </Grid>
//                                             <Grid item className={classes.p}>
//                                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum dolore dolorem eligendi, eum ex hic illo illum magnam nostrum obcaecati officia possimus quia quibusdam rem sapiente, sint totam ullam veniam vero. Accusantium adipisci dignissimos hic nobis, officia sapiente unde?
//                                             </Grid>
//                                             <Grid item className={classes.p}>
//                                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem maxime nulla obcaecati provident quibusdam tempore veniam voluptate. Consequatur deleniti dignissimos minima recusandae saepe. A ab, atque autem delectus deleniti eos libero maxime minus natus neque, non obcaecati perspiciatis quod rem repellendus repudiandae rerum voluptatum? Alias at consectetur cum cupiditate doloremque ea eos et fuga id impedit inventore, labore maiores nesciunt perspiciatis reiciendis rerum sit suscipit voluptas! Atque delectus dolore doloribus iure, quisquam quos ratione ullam vitae? Alias animi aut, debitis delectus deserunt nihil, pariatur porro sed similique tempora vel vitae? Dolor expedita fugiat in officiis quisquam reiciendis, vero? Accusamus animi eveniet facere facilis itaque labore mollitia odit placeat repellat veniam! Alias aspernatur dolorum ea earum eligendi eum fuga in ipsa iure, minus molestiae necessitatibus numquam qui quidem repellat rerum sapiente suscipit ut velit veniam. Atque porro rerum voluptatem? Ad alias aperiam deleniti dolor et eveniet, laborum modi molestias nam perferendis porro quaerat, quas quisquam quod repellendus repudiandae suscipit tempora voluptas. Aut dolorum ex magni modi necessitatibus nisi optio quae repellat similique suscipit tenetur, vel veritatis. Ab distinctio ducimus, earum eligendi excepturi exercitationem fugiat illo inventore laborum maiores nam optio possimus praesentium quo reiciendis reprehenderit suscipit temporibus unde veniam voluptate!
//                                             </Grid>
//                                             <Grid item className={classes.p}>
//                                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem maxime nulla obcaecati provident quibusdam tempore veniam voluptate. Consequatur deleniti dignissimos minima recusandae saepe. A ab, atque autem delectus deleniti eos libero maxime minus natus neque, non obcaecati perspiciatis quod rem repellendus repudiandae rerum voluptatum? Alias at consectetur cum cupiditate doloremque ea eos et fuga id impedit inventore, labore maiores nesciunt perspiciatis reiciendis rerum sit suscipit voluptas! Atque delectus dolore doloribus iure, quisquam quos ratione ullam vitae? Alias animi aut, debitis delectus deserunt nihil, pariatur porro sed similique tempora vel vitae? Dolor expedita fugiat in officiis quisquam reiciendis, vero? Accusamus animi eveniet facere facilis itaque labore mollitia odit placeat repellat veniam! Alias aspernatur dolorum ea earum eligendi eum fuga in ipsa iure, minus molestiae necessitatibus numquam qui quidem repellat rerum sapiente suscipit ut velit veniam. Atque porro rerum voluptatem? Ad alias aperiam deleniti dolor et eveniet, laborum modi molestias nam perferendis porro quaerat, quas quisquam quod repellendus repudiandae suscipit tempora voluptas. Aut dolorum ex magni modi necessitatibus nisi optio quae repellat similique suscipit tenetur, vel veritatis. Ab distinctio ducimus, earum eligendi excepturi exercitationem fugiat illo inventore laborum maiores nam optio possimus praesentium quo reiciendis reprehenderit suscipit temporibus unde veniam voluptate!
//                                             </Grid>
//                                         </Grid>
//                                 </Grid>
//                             </Grid>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// };
//
// export default Blog;
