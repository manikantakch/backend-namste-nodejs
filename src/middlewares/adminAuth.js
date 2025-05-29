const adminAuth = (req,res,next) => {
    const token = 'xyzvhk';

    const isAdmin = token === 'xyz';
    if(!isAdmin) {
        res.status(401).send("un-authorization!!!!")

    }
    else {
next()
    }
}

module.exports = {
    authAdmin:adminAuth
}