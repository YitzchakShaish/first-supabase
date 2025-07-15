import supabase from "./db.js";

// export async function getUserById(id) {
//     const {data, error} = await supabase.from('users').select('*').eq('id', id).single();
//     if(error) throw error
//     return data
    
// }

export async function getUserByIdFDB(id) {
    const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
    
    if (error) {
        return { success: false, error };
    }

    return { success: true, data };
}

export async function getUserByNameAndPassword(username, password) {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();
    
    if (error || !data) {
        return { success: false, data: null, error };
    }

    return { success: true, data, error: null };
}

export async function getAllUsersFDB() {
    const { data, error } = await supabase
        .from('users')
        .select('*');
    
    if (error || !data) {
        return { success: false, data: null, error };
    }

    return { success: true, data, error: null };
}

export async function insertNewUsernameTDB(username) {
    const { data, error } = await supabase
        .from('users')
        .insert([username])  // 
        .select()
        .single();

    if (error || !data) {
        return { success: false, data: null, error };
    }

    return { success: true, data, error: null };
}

export async function updateUsernameTDB(id ,username) {
    const { data, error } = await supabase
        .from('users')
        .update(username)  // 
        .eq('id',id)
        .select()
        .single();

    if (error || !data) {
        return { success: false, data: null, error };
    }

    return { success: true, data, error: null };
}

export async function deleteUsernameFDB(id) {
    const { data, error } = await supabase
        .from('users')
        .delete()  // 
        .eq('id',id)
        .select()
        .single();

    if (error || !data) {
        return { success: false, data: null, error };
    }

    return { success: true, data, error: null };
}

// const result = await getUserById(1);

// if (!result.success) {
//     console.error('Error:', result.error.message);
// } else {
//     console.log('User:', result.data);
// }

// const result = await getAllUsers();

// if (!result.success) {
//     console.error('Insert failed:', result.error.message);
// } else {
//     console.log('ss', result.data);
// }

