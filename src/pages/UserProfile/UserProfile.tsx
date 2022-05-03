import styles from './UserProfile.module.scss';
import Title from '../../components/Title/Title';
import { joinClassNames } from '../../utils/joinClassNames';
import Button from '../../components/Button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import React, { useEffect, useState } from 'react';
import { IUserInformation, IUserProfileInformation } from '../../models/models';
import { SubmitHandler, useForm } from 'react-hook-form';

interface UserProfileProps {
  id: number;
}

const UserProfile = ({ id }: UserProfileProps) => {
  const user: IUserInformation | undefined = useAppSelector((state) =>
    state.user.users.find((user) => user.id === id)
  );

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserProfileInformation>();

  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: 'LOAD_USERS' });
  }, [dispatch]);

  useEffect(() => {
    setValue('name', user?.name ?? '', { shouldValidate: true });
    setValue('username', user?.username ?? '', { shouldValidate: true });
    setValue('email', user?.email ?? '', { shouldValidate: true });
    setValue('street', user?.address.street ?? '', { shouldValidate: true });
    setValue('city', user?.address.city ?? '', { shouldValidate: true });
    setValue('zipcode', user?.address.zipcode ?? '', { shouldValidate: true });
    setValue('phone', user?.phone ?? '', { shouldValidate: true });
    setValue('website', user?.website ?? '', { shouldValidate: true });
  }, [user, setValue]);

  const toggleMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const onSubmit: SubmitHandler<IUserProfileInformation> = () => {
    console.log(JSON.stringify(getValues()));
  };

  if (!user) {
    return <></>;
  }

  return (
    <main className="main">
      <Title text="Профиль пользователя" />
      <Button
        className={styles.buttonToggleMode}
        text="Редактировать"
        onClick={toggleMode}
      />
      <form
        id="profileForm"
        className={styles.editUserForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className={styles.changeUserFieldLabel}>
          Name
          <input
            type="text"
            className={joinClassNames([
              styles.changeUserFieldInput,
              errors?.name?.type === 'required' && styles.invalid,
            ])}
            {...register('name', { required: true })}
            disabled={!isEditMode}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          User name
          <input
            type="text"
            className={joinClassNames([
              styles.changeUserFieldInput,
              errors?.username?.type === 'required' && styles.invalid,
            ])}
            disabled={!isEditMode}
            {...register('username', { required: true })}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          E-mail
          <input
            type="text"
            className={joinClassNames([
              styles.changeUserFieldInput,
              errors?.email?.type === 'required' && styles.invalid,
            ])}
            disabled={!isEditMode}
            {...register('email', { required: true })}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          Street
          <input
            type="text"
            className={joinClassNames([
              styles.changeUserFieldInput,
              errors?.street?.type === 'required' && styles.invalid,
            ])}
            disabled={!isEditMode}
            {...register('street', { required: true })}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          City
          <input
            type="text"
            className={joinClassNames([
              styles.changeUserFieldInput,
              errors?.city?.type === 'required' && styles.invalid,
            ])}
            disabled={!isEditMode}
            {...register('city', { required: true })}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          Zip code
          <input
            type="text"
            className={joinClassNames([
              styles.changeUserFieldInput,
              errors?.zipcode?.type === 'required' && styles.invalid,
            ])}
            disabled={!isEditMode}
            {...register('zipcode', { required: true })}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          Phone
          <input
            type="text"
            className={joinClassNames([
              styles.changeUserFieldInput,
              errors?.phone?.type === 'required' && styles.invalid,
            ])}
            disabled={!isEditMode}
            {...register('phone', { required: true })}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          Website
          <input
            type="text"
            className={joinClassNames([
              styles.changeUserFieldInput,
              errors?.website?.type === 'required' && styles.invalid,
            ])}
            disabled={!isEditMode}
            {...register('website', { required: true })}
          />
        </label>
        <label
          className={joinClassNames([
            styles.changeUserFieldLabel,
            styles.comment,
          ])}
        >
          Comment
          <textarea
            className={joinClassNames([
              styles.changeUserFieldInput,
              styles.commentInput,
            ])}
            disabled={!isEditMode}
            {...register('comment')}
          />
        </label>
      </form>
      <input
        type="submit"
        form="profileForm"
        className={styles.buttonSaveForm}
        disabled={!isEditMode}
      />
    </main>
  );
};

export default UserProfile;
