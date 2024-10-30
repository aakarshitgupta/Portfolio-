app.engine('ejs', ejsMate);
app.set("views",path.join(dirname,"/views"));
app.use(express.static(path.join(dirname, "/public")));