import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { User } from './userModel'

class Session {
    @prop({ ref: () => User })
    user: Ref<User>

    @prop({ default: true })
    valid: Boolean
}

const SessionModel = getModelForClass(Session, {
    schemaOptions: {
        timestamps: true,
    },
})

export default SessionModel