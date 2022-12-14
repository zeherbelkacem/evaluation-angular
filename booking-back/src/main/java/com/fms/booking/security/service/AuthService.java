package com.fms.booking.security.service;

import com.fms.booking.security.entities.Rrole;
import com.fms.booking.security.entities.Uuser;

import java.util.List;

public interface AuthService {

    /********Uuser*******************************/
    /**
     *
     * @param username
     * @return
     */
    public Uuser findUuserByUserName(String username);

    /**
     *
     * @param user
     * @return
     */
    public Uuser saveUuser(Uuser user);

    public Uuser registerUuser(Uuser user);

    /*******Rrole*******************************/

    /**
     *
     * @param role
     * @return
     */
    public Rrole saveRrole(Rrole role);

    /**
     *
     * @param string
     * @return
     */
    public Rrole getRoleByRoleName(String string);

    public List<Uuser>  getAllUsers();

    public Uuser addRoleToUser(String user, String role);

    public List<Uuser> findUsersByRoleName(String role);



}
