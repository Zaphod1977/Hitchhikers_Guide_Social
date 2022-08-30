const { Schema, model, Types } = require('mongoose');
const utils = require('../utils/dateFormat.js');

const reactionSchema = new Schema({
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    username: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get() {
            return utils(this.createdAt);
        }
    },
})

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
        reactions: [reactionSchema],
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