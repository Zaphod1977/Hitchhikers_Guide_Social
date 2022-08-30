const { Schema, model } = require('mongoose');
const utils = require('../utils/dateFormat.js');
const Reaction = require( './reaction.js');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get() {
            return utils(this.createdAt);
        }
    },
    username: {
        type: String,
        require: true
    },
        reactions: [Reaction],
    },
        {
            virtuals: {
                reactionCount: {
                    get() {
                        return this.reactions.length;
                    }
                }
            }
        });



    module.exports = model('Thought', thoughtSchema);