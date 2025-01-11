import supabase from './supabase'

export async function getSettings() {
  const { data, error } = await supabase.from('settings').select('*').single()

  if (error) {
    console.error(error)
    throw new Error('Settings could not be loaded')
  }

  return data
}

// We expect a newSetting object: { setting: newValue }
export async function updateSettings(newSettings) {
  const { data, error } = await supabase
    .from('settings')
    .update(newSettings)
    .eq('id', 1) // there is only 1 row in the settings with id=1
    .single()

  if (error) {
    console.error(error)
    throw new Error('Settings could not be updated')
  }

  return data
}
