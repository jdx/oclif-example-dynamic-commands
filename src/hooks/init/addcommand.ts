import {Command} from '@oclif/command'
import * as Config from '@oclif/config'
import ux from 'cli-ux'

class DynamicPlugin extends Config.Plugin {
  get hooks() { return {} }
  get topics() {
    return []
  }
  get commandIDs() {
    return ['mydynamiccommand']
  }

  get commands(): Config.Command.Plugin[] {
    const cmd = class extends Command {
      static id = 'mydynamiccommand'
      static load() { return cmd }
      async run() {
        ux.log('running mydynamiccommand')
      }
    }
    return [cmd]
  }
}

const hook: Config.Hook<'init'> = async function () {
  this.config.plugins.push(new DynamicPlugin(this.config))
}

export default hook
