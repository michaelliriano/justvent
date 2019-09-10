const Follow = require('../models/Follow')

exports.addFollow = function(req, res){
    let follow = new Follow(req.params.username, req.visitorId)
    follow.create().then(function(){
        req.flash("success", `Successfully followed ${req.params.username} `)
        req.session.save(() => res.redirect(`/profile/${req.params.username}`))
    }).catch(function(errors){
        errors.forEach(error => {
            req.flash("errors", error)
        })
        req.session.save(() => res.redirect('/'))
    })
}

exports.removeFollow = function(req, res){
    let follow = new Follow(req.params.username, req.visitorId)
    follow.delete().then(function(){
        req.flash("success", `Successfully stopped following ${req.params.username} `)
        req.session.save(() => res.redirect(`/profile/${req.params.username}`))
    }).catch(function(errors){
        errors.forEach(error => {
            req.flash("errors", error)
        })
        req.session.save(() => res.redirect('/'))
    })
}