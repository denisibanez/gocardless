import { BaseService } from "../base"

class ChallangeService extends BaseService<unknown> {
  protected baseURL = 'https://api.publicapis.org'
  protected basePath = ''

  async getChallange(): Promise<unknown> {
    return this.customGet<unknown>('/entries')
  }
}

export default new ChallangeService()