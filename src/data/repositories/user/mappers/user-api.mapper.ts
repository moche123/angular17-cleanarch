import { Mapper } from '../../../../base/mapper';
import { IUser } from '../../../../domain/models/user.model';
import { IUserApi } from '../entities/user-api.entity';

export class UserApiMapper extends Mapper<IUserApi, IUser> {
  override mapFrom(param: IUserApi): IUser {
    return {
      login: param.login,
      id: param.id,
      node_id: param.node_id,
      avatar_url: param.avatar_url,
      name: param.name,
      company: param.company,
      location: param.location,
    };
  }

  override mapTo(): IUserApi {
    //*Pending
    return {
      login: '',
      id: 0,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: true,
      name: '',
      company: '',
      blog: '',
      location: '',
      email: '',
      hireable: true,
      bio: '',
      twitter_username: '',
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: '',
      updated_at: '',
    };
  }
}
