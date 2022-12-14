package com.fms.booking.security.service;


import com.fms.booking.security.entities.Rrole;
import com.fms.booking.security.entities.Uuser;
import com.fms.booking.security.repository.RroleRepository;
import com.fms.booking.security.repository.UuserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthServiceImpl implements AuthService {

    String token = "";
    private RroleRepository rroleRepository;
    private UuserRepository uuserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public AuthServiceImpl(RroleRepository rroleRepository, UuserRepository uuserRepository) {
        this.rroleRepository = rroleRepository;
        this.uuserRepository = uuserRepository;
    }

    @Override
    public Uuser findUuserByUserName(String username) {
        return uuserRepository.findByUserName(username);
    }

    @Override
    public Uuser saveUuser(Uuser user) {

        //Creation
//		if(uuserRepository.findById(user.getUserId()).isEmpty()) {
////			if (uuserRepository.findByUserName(user.getUserName()) != null) {
////				throw new NotFoundEntityException("User with the sme userName exists");
////			}
//			String pwdEncoder = passwordEncoder.encode(user.getPassword());
//			user.setPassword(pwdEncoder);
//			return uuserRepository.save(user);
//		}
        //Updating
        //return uuserRepository.save(user);
        String pwdEncoder = passwordEncoder.encode(user.getPassword());
        user.setPassword(pwdEncoder);
        return uuserRepository.save(user);
    }

    @Override
    public Uuser registerUuser(Uuser user) {
        String pwdEncoder = passwordEncoder.encode(user.getPassword());
        user.setPassword(pwdEncoder);
        user.getRoles().add(rroleRepository.findByRole(("USER")));
        return uuserRepository.save(user);
    }

    @Override
    public Rrole saveRrole(Rrole role) {
        return rroleRepository.save(role);
    }

    @Override
    public Rrole getRoleByRoleName(String roleName) {
        return rroleRepository.findByRole(roleName);
    }

    @Override
    public List<Uuser> getAllUsers() {
        return uuserRepository.findAll();
    }

    @Override
    public Uuser addRoleToUser(String user, String role) {
        Uuser uuser = uuserRepository.findByUserName(user);
        uuser.getRoles().add(rroleRepository.findByRole(role));
        return uuserRepository.save(uuser);
    }

    @Override
    public List<Uuser> findUsersByRoleName(String role) {
        List<Uuser> uusers = uuserRepository.findAll();
        List<Uuser> uusers1 = new ArrayList<>();
        uusers.forEach(u->{
                u.getRoles().forEach(r->{
                    if (r.getRole().equalsIgnoreCase(role))
                        uusers1.add(u);
                });
        });
        return uusers1;
    }


}
